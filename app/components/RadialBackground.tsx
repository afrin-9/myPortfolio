export default function RadialBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#00ff88_0%,_#050e0a_60%)]" /> */}
      <div className="min-h-screen bg-gradient-to-b from-black to-[#264035]" />
    </div>
  );
}

