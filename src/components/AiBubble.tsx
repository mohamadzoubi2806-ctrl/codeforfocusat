import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import './AiBubble.css';

export default function AiBubble() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isAiPage = currentPath.includes('/ai-tutor');

  if (isAiPage) {
    return null;
  }

  const aiRoute = '/ai-tutor';

  return (
    <div className="ai-bubble-container">
      <div className="ai-bubble-label">
        <span className="ai-bubble-label-text">Ask Our AI</span>
      </div>

      <div className="ai-bubble-button-wrapper">
        <Link to={aiRoute} className="ai-bubble-button">
          <Sparkles className="ai-bubble-icon" />
          <div className="ai-bubble-pulse" />
        </Link>
      </div>
    </div>
  );
}
