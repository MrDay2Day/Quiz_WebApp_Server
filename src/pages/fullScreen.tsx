import React, { useState, useCallback, useEffect } from "react";

const FullscreenDemo = ({ children }: { children: React.ReactNode }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = React.useRef(null);

  // Check if browser supports fullscreen
  const canFullscreen = document.fullscreenEnabled;

  // Handle entering fullscreen
  const enterFullscreen = useCallback(async () => {
    try {
      if (containerRef.current) {
        // @ts-expect-error: issue
        if (containerRef.current.requestFullscreen) {
          // @ts-expect-error: issue
          await containerRef.current.requestFullscreen();
          // @ts-expect-error: issue
        } else if (containerRef.current.webkitRequestFullscreen) {
          // @ts-expect-error: issue
          await containerRef.current.webkitRequestFullscreen();
          // @ts-expect-error: issue
        } else if (containerRef.current.msRequestFullscreen) {
          // @ts-expect-error: issue
          await containerRef.current.msRequestFullscreen();
        }
      }
    } catch (error) {
      console.error("Error attempting to enter fullscreen:", error);
    }
  }, []);

  // Handle exiting fullscreen
  const exitFullscreen = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        // @ts-expect-error: issue
      } else if (document.webkitExitFullscreen) {
        // @ts-expect-error: issue

        await document.webkitExitFullscreen();
        // @ts-expect-error: issue
      } else if (document.msExitFullscreen) {
        // @ts-expect-error: issue

        await document.msExitFullscreen();
      }
    } catch (error) {
      console.error("Error attempting to exit fullscreen:", error);
    }
  }, []);

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen]);

  // Update fullscreen state when it changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        // minHeight: "300px",
        backgroundColor: "#242424",
        // padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // gap: "16px",
      }}
    >
      {canFullscreen ? (
        <button
          onClick={toggleFullscreen}
          style={{
            right: 10,
            position: "absolute",
            padding: 8,
            width: 40,
            top: 5,
          }}
        >
          F
        </button>
      ) : (
        <p>Fullscreen is not supported in your browser</p>
      )}
      {children}
    </div>
  );
};

export default FullscreenDemo;
