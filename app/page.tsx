import { Particles } from "@/components/ui/shadcn-io/particles";

export default function Home() {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Your content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            Interactive Design
          </h1>
          <p className="text-xl text-gray-300">
            Move your cursor to experience the physics
          </p>
        </div>
      </div>

      {/* Interactive particles */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />
    </div>
  );
}
