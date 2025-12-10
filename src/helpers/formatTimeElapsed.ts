const formatUnit = (value: number) => value.toString().padStart(2, '0');

export const formatTimeElapsed = (seconds: number): string => {
  const totalSeconds = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${formatUnit(minutes)}:${formatUnit(remainingSeconds)}`;
};
