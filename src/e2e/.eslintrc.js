module.exports = {
  extends: ['plugin:cypress/recommended'],
  rules: {
    'import/no-extraneous-dependencies': 0, // import 된 모듈이, 적절하게 패키지 목록에 선언되어 있는지 확인함 cypress 특성 오류로 선언해 줘야함
  },
};
