import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useLocalStorage } from 'usehooks-ts';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const [enabled, setEnabled] = useState(theme === 'dark');

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? 'light' : 'dark');
    setEnabled(enabled);
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleThemeChange}
      className={classNames(
        enabled ? 'bg-blue-300' : 'bg-purple',
        'relative inline-flex items-center h-9 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out'
      )}
    >
      <span className='sr-only'>Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-6' : 'translate-x-1',
          'pointer-events-none relative inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            enabled
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden='true'
        >
          <MoonIcon className='h-4 w-4 text-background' />
        </span>
        <span
          className={classNames(
            enabled
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden='true'
        >
          <SunIcon className='h-5 w-5 text-yellow-400' />
        </span>
      </span>
    </Switch>
  );
}

export default ThemeSwitcher;
