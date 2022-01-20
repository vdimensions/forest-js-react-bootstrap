export type FormValidationRule = {
    isValid?: boolean;
    message?: string;
}
export type FormConstraintValidationRule<T> = FormValidationRule & {
    constraint: T
}
export type FormRegexValidationRule = FormValidationRule & {
    expression: string
}
export type FormCompareValidationRule = FormValidationRule & {
    name: string;
}

export type FormValidationState<T> = {
    required?: FormValidationRule;
    minLength?: FormConstraintValidationRule<number>;
    maxLength?: FormConstraintValidationRule<number>;
    minValue?: FormConstraintValidationRule<T>;
    maxValue?: FormConstraintValidationRule<T>;
    format?: FormRegexValidationRule;
    compare?: FormCompareValidationRule;
}

export type FormField<T> = {
    label : string;
    name: string;
    value: T;
    validation: FormValidationState<T>;
}