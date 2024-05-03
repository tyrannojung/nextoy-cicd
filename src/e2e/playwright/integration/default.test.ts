import { test, expect } from '@playwright/test';

test.describe('테스트 코드 테스트 시트', () => {
  test('테스트 코드 사이트 버튼 테스트', async ({ page }) => {
    // 웹 페이지 방문
    await page.goto('/'); // baseURL 설정이 있다면, '/'로 충분

    // 숫자 입력
    await page.locator('#number-input').fill('12345');

    // 제출 버튼 클릭
    await page.locator('#submit-button').click();

    // 결과 확인
    const formattedValue = await page.locator('#formatted-value').textContent();
    await expect(formattedValue).toContain('12,345');
  });
});
