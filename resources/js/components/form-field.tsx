import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Field, FieldError } from './ui/field';

interface FormFieldProps {
  name: string;
  label?: string;
  type?:
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'textarea'
  | 'select'
  | 'date'
  | 'checkbox';
  defaultValue?: string | number | readonly string[] | undefined | boolean;
  placeholder?: string;
  options?: { label: string; value: string | number }[];
  disabled?: boolean;
  className?: string;
  required?: boolean;
  error?: string;
}

export default function FormField({
  name,
  label,
  type = 'text',
  defaultValue,
  placeholder = '',
  options = [],
  disabled = false,
  className,
  required,
  error,
}: FormFieldProps) {
  const errorId = `${name}-error`;
  const invalid = Boolean(error);
  const ariaProps = {
    'aria-invalid': invalid,
    'aria-describedby': invalid ? errorId : undefined,
  };

  return (
    <Field className={cn('flex w-full flex-col gap-2', className)}>
      {label && (
        <Label
          htmlFor={name}
          className={cn(invalid && 'text-destructive')}
        >
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}

      {type === 'textarea' ? (
        <Textarea
          id={name}
          name={name}
          defaultValue={
            defaultValue as
            | string
            | number
            | readonly string[]
            | undefined
          }
          placeholder={placeholder}
          disabled={disabled}
          {...ariaProps}
        />
      ) : type === 'select' ? (
        <Select
          name={name}
          defaultValue={
            defaultValue !== undefined
              ? String(defaultValue)
              : undefined
          }
          disabled={disabled}
        >
          <SelectTrigger id={name} className="w-full" {...ariaProps}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{name}</SelectLabel>
              {options.map((opt) => (
                <SelectItem
                  key={opt.value}
                  value={String(opt.value)}
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      ) : type === 'checkbox' ? (
        <div className="flex items-center gap-2">
          <Checkbox
            id={name}
            name={name}
            defaultChecked={Boolean(defaultValue)}
            disabled={disabled}
            value="1"
            {...ariaProps}
          />
          <Label
            htmlFor={name}
            className="cursor-pointer select-none"
          >
            {label}
          </Label>
        </div>
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          defaultValue={
            defaultValue as
            | string
            | number
            | readonly string[]
            | undefined
          }
          placeholder={placeholder}
          disabled={disabled}
          {...ariaProps}
        />
      )}

      {invalid && (
        <FieldError
          id={errorId}
          className="text-xs font-medium"
        >
          {error}
        </FieldError>
      )}
    </Field>
  );
}
