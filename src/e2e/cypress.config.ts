import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // base url
    chromeWebSecurity: false, // 다른 도메인 간에 자원을 요청하거나 통신해야 하는 테스트를 할 때 cors 오류가 발생할 수 있으므로 추가해야함
    video: false, // 테스트 비디오 녹화 false가 좋음
    specPattern: 'cypress/integration/*.test.ts', // 폴더 구조 패턴 설정
  },
});
