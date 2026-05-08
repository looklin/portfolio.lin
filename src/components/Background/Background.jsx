const Background = () => {
  return (
    <>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/leaves.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/70 -z-10"></div>
    </>
  );
};

export default Background;