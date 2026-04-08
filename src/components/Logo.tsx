interface LogoProps {
  variant?: 'default' | 'white';
}

export default function Logo({ variant = 'default' }: LogoProps) {
  const textColor = variant === 'white' ? 'text-white' : 'text-slate-900';
  const accentColor = variant === 'white' ? 'text-amber-400' : 'text-amber-500';

  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-lg font-bold ${textColor} tracking-tight`}>
          Trailer<span className={accentColor}>Insurance</span>
        </span>
        <span className={`text-[10px] font-medium ${variant === 'white' ? 'text-slate-400' : 'text-slate-500'} tracking-widest uppercase`}>
          .co.nz
        </span>
      </div>
    </div>
  );
}
