import { ResultsService } from './results.service';

describe('ResultsService.correctPercentage', () => {
  it('корректно считает процент', () => {
    expect(ResultsService.correctPercentage(5, 10)).toBe(50);
    expect(ResultsService.correctPercentage(3, 4)).toBe(75);
    expect(ResultsService.correctPercentage(0, 10)).toBe(0);
    expect(ResultsService.correctPercentage(7, 7)).toBe(100);
    expect(ResultsService.correctPercentage(1, 3)).toBeCloseTo(33.33, 2);
  });

  it('округляет до двух знаков', () => {
    expect(ResultsService.correctPercentage(1, 6)).toBeCloseTo(16.67, 2);
    expect(ResultsService.correctPercentage(2, 3)).toBeCloseTo(66.67, 2);
  });

  it('выбрасывает ошибку при countAnswers <= 0', () => {
    expect(() => ResultsService.correctPercentage(1, 0)).toThrow(
      'Invalid countAnswers',
    );
    expect(() => ResultsService.correctPercentage(1, -5)).toThrow(
      'Invalid countAnswers',
    );
  });

  it('выбрасывает ошибку при points < 0', () => {
    expect(() => ResultsService.correctPercentage(-1, 10)).toThrow(
      'Points value cannot be negative',
    );
  });
});
