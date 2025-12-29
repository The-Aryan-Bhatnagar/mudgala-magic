const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main gold orb */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full animate-float opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(42 87% 55% / 0.3) 0%, transparent 70%)',
          top: '10%',
          right: '-10%',
        }}
      />
      
      {/* Secondary orb */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full animate-float-delayed opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(42 87% 55% / 0.25) 0%, transparent 70%)',
          bottom: '5%',
          left: '-5%',
        }}
      />
      
      {/* Small accent orb */}
      <div 
        className="absolute w-[200px] h-[200px] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, hsl(42 87% 55% / 0.2) 0%, transparent 70%)',
          top: '40%',
          left: '20%',
        }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(42 87% 55%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(42 87% 55%) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
