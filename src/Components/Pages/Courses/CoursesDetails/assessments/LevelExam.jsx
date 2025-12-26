import AntiCheatGuard from "./AntiCheatGuard";

const LevelExam = ({ level }) => {
  return (
    <AntiCheatGuard>
      <div className="p-12 bg-slate-900 text-white rounded-3xl">
        <h3 className="text-2xl font-black mb-4">
          Level {level} Certification Exam
        </h3>

        <p className="text-slate-400 mb-6">
          Timed • Randomized • Anti-Cheat Enabled
        </p>

        <button className="px-8 py-4 bg-[#0e5da0] rounded-xl font-bold">
          Start Exam
        </button>
      </div>
    </AntiCheatGuard>
  );
};

export default LevelExam;
