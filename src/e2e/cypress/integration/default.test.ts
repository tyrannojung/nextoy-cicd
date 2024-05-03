describe('테스트 코드 테스트 시트', () => {
  it('테스트 코드 사이트 버튼 테스트', () => {
    cy.visit('/');
    // 숫자 입력
    cy.get('#number-input').type('12345');
    // 제출 버튼 클릭
    cy.get('#submit-button').click();
    // 결과 확인
    cy.get('#formatted-value').should('contain', '12,345');
  });
});
