import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

/**
 * 공통 Button 컴포넌트
 *
 * @param type 버튼 타입 (기본값은 button)
 * @param disabled 버튼 비활성화 여부
 * @param children 버튼 안에 들어갈 콘텐츠
 * @param className 버튼에 적용할 커스텀 클래스 이름
 */
const Button = ({
  type = 'button',
  disabled,
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'h-8 rounded-md bg-black px-3 text-sm font-medium text-white',
        disabled && 'bg-gray-300',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
