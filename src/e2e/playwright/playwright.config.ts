import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './integration', // 테스트 파일이 있는 디렉토리
  testMatch: '**/*.test.ts', // 테스트 파일 패턴
  // 특정 파일 또는 패턴을 무시할 수도 있음.
  //   testIgnore: '**/example.ignore.ts',

  fullyParallel: true, // 모든 테스트 파일을 병렬로 실행할지 여부를 결정
  forbidOnly: !!process.env.CI, // ci환경(process.env.CI 값이 있으면)에서 test only(특정 테스트만 실행) 사용 금지
  retries: process.env.CI ? 2 : 0, // 테스트 실패시 재시도 횟수
  workers: process.env.CI ? 1 : undefined, // 동시에 실행할 테스트 워커의 수 ci에서는 1로 설정하여 순차적으로 실행하도록 한다.
  reporter: 'html', // 테스트 결과를 보여주는 리포터 html 포맷 설정
  use: {
    baseURL, //테스트에 사용할 기본 URL
    headless: true, // 해드리스 모드(GUI 없이 소프트웨어 프로그램 실행 의미) 사용 여부 결정, false는 GUI 모드로 실행됨
    viewport: { width: 1280, height: 720 }, // 테스트 브라우저 창 크기
    ignoreHTTPSErrors: true, // https 오류 무시 결정
    video: 'off', // 녹화여부 결정
    colorScheme: 'dark', // 다크 모드 활성화
    trace: 'on', // 테스트 실행 추적을 저장할지 결정
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
