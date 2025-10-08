import clsx from 'clsx';
import type { MouseEventHandler } from 'react';

type IButtonProps = {
  xl?: boolean;
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
};

const Button = (props: IButtonProps) => {
  const { xl, children, onClick, type = 'button', disabled, className } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'inline-block rounded-md bg-primary-500 text-center text-white transition-colors hover:bg-primary-600',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        xl
          ? 'px-6 py-4 text-xl font-extrabold'
          : 'px-4 py-2 text-lg font-semibold',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
};

export { Button };
