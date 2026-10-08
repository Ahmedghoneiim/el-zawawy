export default function Header() {
  return (
    <div className="w-full text-center pt-16 pb-12 px-4">
      {/* Category tag */}
      <span className="inline-block text-[#A78343] font-cairo font-bold text-[13px] leading-[20px] mb-2 tracking-wide">
        مميزات التطبيق
      </span>

      {/* Main title with decorative side lines */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto my-1">
        <div 
          className="h-[1px] w-16 sm:w-24 hidden sm:block"
          style={{
            background: 'linear-gradient(270deg, #C9A45C 0%, rgba(201, 164, 92, 0) 100%)'
          }}
        />
        <h2 className="font-cairo font-extrabold text-[32px] sm:text-[40px] leading-[60px] text-[#174A3A] tracking-tight whitespace-nowrap">
          تجربة إيمانية متكاملة
        </h2>
        <div 
          className="h-[1px] w-16 sm:w-24 hidden sm:block"
          style={{
            background: 'linear-gradient(90deg, #C9A45C 0%, rgba(201, 164, 92, 0) 100%)'
          }}
        />
      </div>

      {/* Subtitle description */}
      <p className="mt-2 font-cairo font-normal text-[14px] sm:text-[15px] leading-[28px] text-[#68736F] max-w-[550px] mx-auto">
        كل ما يقربك إلى الله، في تجربة تمنح يومك معنى، وقلبك سكينة.
      </p>
    </div>
  );
}
