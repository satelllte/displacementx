import {GeneratorLayout} from './GeneratorLayout';
import {CanvasSection} from './CanvasSection';
import {SettingsSection} from './SettingsSection';

export function Generator() {
  return (
    <GeneratorLayout
      sectionL={<CanvasSection />}
      sectionR={<SettingsSection />}
    />
  );
}
