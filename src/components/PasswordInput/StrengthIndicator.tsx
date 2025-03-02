import { FC, useState, useEffect } from "react";
import styles from "./strength-indicator.module.scss";

interface StrengthIndicatorProps {
  password: string;
}

type Strength = 0 | 1 | 2 | 3 | 4;

const title = {
  0: "Ненадежный пароль",
  1: "Ненадежный пароль",
  2: "Простой пароль",
  3: "Надежный пароль",
  4: "Отличный пароль",
};

const calculateStrengthLevel = (password: string): Strength => {
  const hasNumbers = /[0-9]/.test(password);
  const hasLowercaseLetters = /[a-z]/.test(password);
  const hasUppercaseLetters = /[A-Z]/.test(password);
  const hasSpecialCharacters = /[!@#%^&*]/.test(password);
  const hasSpaceCharacters = /\s/.test(password);
  if (!password.length) return 0;
  if (password.length < 8) return 1;
  if (password.length > 128) return 1;
  if (hasSpaceCharacters) return 1;
  if (
    hasNumbers &&
    hasLowercaseLetters &&
    hasUppercaseLetters &&
    hasSpecialCharacters
  )
    return 4;
  if (hasNumbers && hasLowercaseLetters && hasUppercaseLetters) return 3;
  if (hasNumbers && (hasLowercaseLetters || hasUppercaseLetters)) return 2;
  if (hasNumbers && hasSpecialCharacters) return 2;
  if (hasSpecialCharacters && (hasLowercaseLetters || hasUppercaseLetters))
    return 2;
  if (hasNumbers || hasLowercaseLetters || hasUppercaseLetters) return 1;

  return 0;
};

const StrengthIndicator: FC<StrengthIndicatorProps> = ({ password }) => {
  const [strengthLevel, setStrengthLevel] = useState<Strength>(0);

  useEffect(() => {
    const level = calculateStrengthLevel(password);
    setStrengthLevel(level);
  }, [password]);

  return (
    <div className={styles.strengthIndicator}>
      <div className={styles.strengthLevelWrapper}>
        {Array.from(Array(4).keys()).map((_, index) => (
          <div
            key={_}
            className={`${styles.indicator} ${
              index < strengthLevel ? styles.active : ""
            }`}
          />
        ))}
      </div>
      <span className={styles.indicatorText}>{title[strengthLevel]}</span>
    </div>
  );
};

export default StrengthIndicator;
