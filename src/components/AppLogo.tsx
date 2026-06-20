import logoUrl from '../assets/logo.jpg';

interface AppLogoProps {
  collapsed?: boolean;
}

export function AppLogo({ collapsed = false }: AppLogoProps) {
  return (
    <div className="dm-logo">
      <img src={logoUrl} alt="DailyMate logo" />
      {!collapsed && (
        <span className="dm-heading" style={{ fontSize: 18, color: '#2C1A0E', whiteSpace: 'nowrap' }}>
          Daily Mate
        </span>
      )}
    </div>
  );
}
