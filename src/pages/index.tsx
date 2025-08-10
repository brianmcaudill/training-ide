import { useState, useEffect } from 'react';
import { Mosaic, MosaicWindow, MosaicNode, MosaicBranch } from 'react-mosaic-component';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Play,
  Settings,
  Layout,
  Columns,
  Square,
  Grid3x3,
  PanelLeft
} from "lucide-react";
import 'react-mosaic-component/react-mosaic-component.css';

type ViewId = string;

interface PanelConfig {
  id: string;
  type: string;
  title: string;
  content?: string;
  labs?: any[];
  defaultContent?: string;
  initialOutput?: string;
  slides?: any[];
}

interface LayoutConfig {
  layout: MosaicNode<ViewId>;
  panels: Record<string, PanelConfig>;
}

const WidgetRenderer = ({ panelConfig }: { panelConfig: PanelConfig }) => {
  switch(panelConfig.type) {
    case 'markdown':
    case 'instructions':
      return (
        <div className="p-4 h-full overflow-auto bg-white dark:bg-gray-900">
          <ReactMarkdown>
            {panelConfig.content || ''}
          </ReactMarkdown>
        </div>
      );
    
    case 'labs':
      return (
        <div className="p-4 h-full overflow-auto bg-white dark:bg-gray-900">
          <div className="space-y-3">
            {panelConfig.labs?.map((lab: any) => (
              <Card key={lab.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center justify-between">
                    <span>{lab.title}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      lab.status === 'completed' ? 'bg-green-100 text-green-800' :
                      lab.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {lab.status}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{lab.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    
    case 'editor':
      return (
        <div className="h-full flex flex-col bg-gray-900">
          <div className="flex items-center justify-between p-2 bg-gray-800 border-b border-gray-700">
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" className="text-green-400 hover:text-green-300">
                <Play className="w-4 h-4 mr-1" />
                Run
              </Button>
            </div>
          </div>
          <textarea 
            className="flex-1 p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none"
            defaultValue={panelConfig.defaultContent}
            placeholder="Start coding..."
          />
        </div>
      );
    
    case 'terminal':
      return (
        <div className="h-full bg-black text-green-400 font-mono text-sm p-3 overflow-auto">
          <pre>{panelConfig.initialOutput}</pre>
          <input 
            type="text" 
            className="w-full bg-transparent border-none outline-none"
            placeholder="Type command..."
          />
        </div>
      );
    
    case 'presentation':
      const [currentSlide, setCurrentSlide] = useState(0);
      const slides = panelConfig.slides || [];
      
      return (
        <div className="h-full flex flex-col bg-white dark:bg-gray-900">
          <div className="flex-1 flex items-center justify-center p-8">
            {slides[currentSlide] && (
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
                <p className="text-lg">{slides[currentSlide].content}</p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <Button 
              size="sm" 
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
            >
              Previous
            </Button>
            <span className="text-sm">
              {currentSlide + 1} / {slides.length}
            </span>
            <Button 
              size="sm"
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              disabled={currentSlide === slides.length - 1}
            >
              Next
            </Button>
          </div>
        </div>
      );
    
    default:
      return (
        <div className="p-4 h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <Alert>
            <AlertDescription>
              Widget type "{panelConfig.type}" placeholder - Coming soon!
            </AlertDescription>
          </Alert>
        </div>
      );
  }
};

export default function HomePage() {
  const [config, setConfig] = useState<LayoutConfig | null>(null);
  const [currentLayout, setCurrentLayout] = useState<MosaicNode<ViewId> | null>(null);
  const [originalLayout, setOriginalLayout] = useState<MosaicNode<ViewId> | null>(null);

  // Predefined layouts
  const layouts = {
    default: {
      name: "Default",
      icon: Layout,
      layout: null as MosaicNode<ViewId> | null, // Will be loaded from config
    },
    sideBySide: {
      name: "Side by Side",
      icon: Columns,
      layout: {
        direction: 'row',
        first: 'instructions',
        second: 'editor',
        splitPercentage: 50
      } as MosaicNode<ViewId>
    },
    focusMode: {
      name: "Focus Mode",
      icon: Square,
      layout: 'editor' as MosaicNode<ViewId>
    },
    quadrant: {
      name: "Quadrant",
      icon: Grid3x3,
      layout: {
        direction: 'row',
        first: {
          direction: 'column',
          first: 'instructions',
          second: 'labs',
          splitPercentage: 50
        },
        second: {
          direction: 'column',
          first: 'editor',
          second: 'terminal',
          splitPercentage: 50
        },
        splitPercentage: 50
      } as MosaicNode<ViewId>
    },
    leftPanel: {
      name: "Left Panel",
      icon: PanelLeft,
      layout: {
        direction: 'row',
        first: 'instructions',
        second: {
          direction: 'column',
          first: 'editor',
          second: 'terminal',
          splitPercentage: 70
        },
        splitPercentage: 25
      } as MosaicNode<ViewId>
    }
  };

  useEffect(() => {
    fetch('/panel-config.json')
      .then(res => res.json())
      .then(data => {
        setConfig(data);
        setCurrentLayout(data.layout);
        setOriginalLayout(data.layout);
        // Set the default layout
        layouts.default.layout = data.layout;
      })
      .catch(err => console.error('Failed to load config:', err));
  }, []);

  const handleReset = () => {
    if (originalLayout) {
      setCurrentLayout(originalLayout);
    }
  };

  const handleLayoutChange = (layoutKey: keyof typeof layouts) => {
    const selectedLayout = layouts[layoutKey].layout;
    if (selectedLayout) {
      setCurrentLayout(selectedLayout);
    }
  };

  const renderTile = (id: ViewId, path: MosaicBranch[]) => {
    const panelConfig = config?.panels[id];
    
    if (!panelConfig) {
      return (
        <MosaicWindow<ViewId>
          path={path}
          title="Unknown Panel"
          toolbarControls={[]}
        >
          <div className="p-4">Panel configuration not found</div>
        </MosaicWindow>
      );
    }

    return (
      <MosaicWindow<ViewId>
        path={path}
        title={panelConfig.title}
        toolbarControls={[]}
      >
        <WidgetRenderer panelConfig={panelConfig} />
      </MosaicWindow>
    );
  };

  if (!config || !currentLayout) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Card>
          <CardContent className="p-8">
            <p>Loading Training IDE...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">Training IDE</h1>
            <span className="text-sm text-gray-500">Skillable-like Learning Environment</span>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-1" />
                  Layout
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Choose Layout</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleLayoutChange('default')}>
                  <Layout className="w-4 h-4 mr-2" />
                  Default
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLayoutChange('sideBySide')}>
                  <Columns className="w-4 h-4 mr-2" />
                  Side by Side
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLayoutChange('focusMode')}>
                  <Square className="w-4 h-4 mr-2" />
                  Focus Mode
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLayoutChange('quadrant')}>
                  <Grid3x3 className="w-4 h-4 mr-2" />
                  Quadrant
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLayoutChange('leftPanel')}>
                  <PanelLeft className="w-4 h-4 mr-2" />
                  Left Panel
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>
      </header>
      
      <div className="flex-1 relative">
        <Mosaic<ViewId>
          renderTile={renderTile}
          value={currentLayout}
          onChange={setCurrentLayout}
          className="mosaic-custom-theme"
        />
      </div>
    </div>
  );
}