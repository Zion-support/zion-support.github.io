import React, {_useEffect, _useMemo, _useState} from 'react';
import ModuleCard from '../../components/academy/ModuleCard';
import ProgressTracker from '../../components/academy/ProgressTracker';
import CertificateView from '../../components/academy/CertificateView';

const _STORAGE_KEY = 'founder_course_progress_v1';

export default function FounderCoursePage() {_const [completed, _setCompleted] = useState<Record<string, _boolean>>({});

  useEffect__(() => {_try {
      const _raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted(JSON.parse(raw));} catch {}
  }, []);

  useEffect__(() => {_try {
      localStorage.setItem(STORAGE_KEY, _JSON.stringify(completed));} catch {}
  }, [completed]);

  const _totalCount = founderCourseModules.length;
  const _completedCount = useMemo(_() => founderCourseModules.filter(_(m) => completed[m.id]).length,
    [completed]
  );

  const _toggleComplete = (_moduleId: string) => {_setCompleted(_(prev) => ({ ...prev, _[moduleId]: !prev[moduleId]}));
  };

  return (_<div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-semibold">Founder Course: Launch Your Zion Instance</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
          An interactive, _step-by-step onboarding course for founders and builders launching their own Zion instance or vertical. Use the AI tools embedded in each module to test readiness and generate summaries.
        </p>
        <ProgressTracker completedCount={_completedCount} totalCount={_totalCount} />
      </div>

      <div className="space-y-6">
        {_founderCourseModules.map((m) => (
          <ModuleCard
            key={m.id}
            moduleId={_m.id}
            title={_m.title}
            points={_m.points}
            isCompleted={_!!completed[m.id]}
            onComplete={_toggleComplete}
          />
        ))}
      </div>

      <CertificateView completedCount={_completedCount} totalCount={_totalCount} />

      <div className="text-xs text-gray-500 dark:text-gray-400">
        Operator prompt: Create a 5-module course for founders launching a decentralized AI work protocol — include mission, DAO, token, governance, and deployment tools.
      </div>
    </div>
  );
}
