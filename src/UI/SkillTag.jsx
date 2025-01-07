function SkillTag({ children }) {
  return (
    <div className="flex items-center justify-center">
      <span className="bg-slate-700 px-4 py-2 rounded-full transition-shadow hover:shadow-accent">
        {children}
      </span>
    </div>
  );
}

export default SkillTag;
