interface HeaderProps {
  title: string;
  lead: string;
  banner: string;
}

export function Header({ title, banner, lead }: HeaderProps) {
  return (
    <header className="py-6 bg-cover bg-center" style={{ 
      backgroundImage: banner ? `url(${banner})` : 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(5px)'
    }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-2 text-shadow">{title}</h1>
            {lead && <p className="text-xl text-white">{lead}</p>}
          </div>
        </div>
      </div>
    </header>
  );
}
