import React, { useEffect, useState } from "react";

const QUESTIONS = [
  {
    id: 1,
    question: "What is institutional liquidity?",
    options: [
      "Retail stop orders",
      "Large financial entity order flow",
      "Random market noise",
      "Broker spreads",
    ],
    correct: 1,
  },
  {
    id: 2,
    question: "What does SMC stand for?",
    options: [
      "Smart Market Concept",
      "Smart Money Concept",
      "System Market Control",
      "Supply Market Cycle",
    ],
    correct: 1,
  },
];

const PASS_PERCENTAGE = 70;

const MCQQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  /* 🔐 ANTI-CHEAT */
  useEffect(() => {
    const handleViolation = () => {
      if (!submitted) submitExam(true);
    };

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) handleViolation();
    });

    window.addEventListener("blur", handleViolation);

    return () => {
      window.removeEventListener("blur", handleViolation);
    };
  }, [submitted]);

  useEffect(() => {
  // 🔥 Hide global layout
  document.body.classList.add("exam-mode");

  return () => {
    // 🔥 Restore layout
    document.body.classList.remove("exam-mode");
  };
}, []);


  const submitExam = (auto = false) => {
    let score = 0;

    QUESTIONS.forEach((q) => {
      if (answers[q.id] === q.correct) score++;
    });

    const percent = Math.round((score / QUESTIONS.length) * 100);

    setResult({
      score,
      percent,
      passed: percent >= PASS_PERCENTAGE,
      autoSubmitted: auto,
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-[#020617] flex items-center justify-center text-white">
        <div className="bg-slate-900 p-12 rounded-3xl text-center max-w-lg">
          <h2 className="text-3xl font-black mb-4">
            {result.passed ? "✅ Exam Passed" : "❌ Exam Failed"}
          </h2>

          <p className="text-slate-400 mb-6">
            Score: <span className="font-bold">{result.percent}%</span>
          </p>

          {result.autoSubmitted && (
            <p className="text-red-400 text-sm mb-4">
              Exam auto-submitted due to tab change.
            </p>
          )}

          <button
            onClick={() => window.location.href = "/course-details"}
            className="mt-4 px-8 py-4 bg-[#0e5da0] rounded-xl font-bold"
          >
            Exit Exam
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#020617] text-white overflow-y-auto">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-black mb-10 text-center">
          Final MCQ Examination
        </h1>

        {QUESTIONS.map((q, index) => (
          <div key={q.id} className="mb-10">
            <h3 className="font-bold mb-4">
              {index + 1}. {q.question}
            </h3>

            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    checked={answers[q.id] === i}
                    onChange={() =>
                      setAnswers((prev) => ({ ...prev, [q.id]: i }))
                    }
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={() => submitExam(false)}
          className="w-full py-5 bg-[#0e5da0] rounded-2xl font-black uppercase tracking-widest"
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
};

export default MCQQuiz;
