import React, { useEffect, useState, useRef } from 'react';
import { CameraIcon, AlertCircleIcon } from 'lucide-react';
interface CameraFeedProps {
  onFrame?: (imageData: ImageData) => void;
  isActive: boolean;
}
export const CameraFeed: React.FC<CameraFeedProps> = ({
  onFrame,
  isActive
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [detectedObjects, setDetectedObjects] = useState<Array<{
    x: number;
    y: number;
    width: number;
    height: number;
    label: string;
  }>>([]);
  // Mock object detection
  useEffect(() => {
    if (isActive && videoRef.current && canvasRef.current) {
      const interval = setInterval(() => {
        // This would normally be handled by MediaPipe
        const mockObjects = [{
          x: Math.random() * 0.7,
          y: Math.random() * 0.7,
          width: 0.2,
          height: 0.2,
          label: 'Chair'
        }];
        setDetectedObjects(mockObjects);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isActive]);
  // Initialize camera when active
  useEffect(() => {
    if (isActive) {
      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: 'environment'
            }
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            setHasPermission(true);
          }
        } catch (err) {
          console.error('Error accessing camera:', err);
          setHasPermission(false);
        }
      };
      startCamera();
      return () => {
        // Stop camera when component is inactive
        if (videoRef.current && videoRef.current.srcObject) {
          const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
          tracks.forEach(track => track.stop());
        }
      };
    }
  }, [isActive]);
  // Draw bounding boxes for detected objects
  useEffect(() => {
    if (canvasRef.current && videoRef.current && detectedObjects.length > 0) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        // Clear previous drawings
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Set canvas dimensions to match video
        canvas.width = videoRef.current.videoWidth || 640;
        canvas.height = videoRef.current.videoHeight || 480;
        // Draw bounding boxes
        detectedObjects.forEach(obj => {
          const x = obj.x * canvas.width;
          const y = obj.y * canvas.height;
          const width = obj.width * canvas.width;
          const height = obj.height * canvas.height;
          context.strokeStyle = '#FF0000';
          context.lineWidth = 3;
          context.strokeRect(x, y, width, height);
          // Draw label
          context.fillStyle = '#FF0000';
          context.fillRect(x, y - 20, obj.label.length * 8, 20);
          context.fillStyle = '#FFFFFF';
          context.font = '16px Arial';
          context.fillText(obj.label, x + 5, y - 5);
        });
      }
    }
  }, [detectedObjects]);
  if (hasPermission === false) {
    return <div className="flex flex-col items-center justify-center p-6 bg-red-100 rounded-lg">
        <AlertCircleIcon size={48} className="text-red-600 mb-4" />
        <h3 className="text-xl font-bold text-red-700">Camera Access Denied</h3>
        <p className="text-center mt-2">
          This app requires camera access to detect obstacles. Please enable
          camera permissions in your browser settings.
        </p>
      </div>;
  }
  return <div className="relative w-full max-w-lg mx-auto rounded-lg overflow-hidden">
      {!isActive && <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-10">
          <div className="text-center text-white">
            <CameraIcon size={48} className="mx-auto mb-2" />
            <p className="text-lg">Camera inactive</p>
          </div>
        </div>}
      <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" style={{
      maxHeight: '70vh'
    }} />
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
      {detectedObjects.length > 0 && isActive && <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white p-3 text-center">
          <p className="font-bold">
            Obstacle Detected: {detectedObjects[0].label}
          </p>
        </div>}
    </div>;
};