import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export const AnimatedCounter = ({ value, className = '' }: AnimatedCounterProps) => {
  // Извлекаем числовое значение из строки
  const getNumericValue = (str: string): number => {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  // Получаем префикс и суффикс
  const getPrefix = (str: string): string => {
    const match = str.match(/^[^\d]*/);
    return match ? match[0] : '';
  };

  const getSuffix = (str: string): string => {
    const match = str.match(/[^\d]*$/);
    return match ? match[0] : '';
  };

  const numericValue = getNumericValue(value);
  const prefix = getPrefix(value);
  const suffix = getSuffix(value);

  const { count, elementRef } = useCountUp({
    end: numericValue,
    duration: 2500,
    start: 0
  });

  return (
    <div ref={elementRef} className={className}>
      {prefix}{count}{suffix}
    </div>
  );
};