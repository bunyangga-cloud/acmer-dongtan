/**
 * [아크메르 동탄] 관심고객 구글 스프레드시트 자동 저장 Apps Script
 * 
 * [연동 방법 - 1분 완성]
 * 1. Google Drive에서 새 'Google 스프레드시트'를 만듭니다. (시트 이름: 관심고객)
 * 2. 1행에 헤더를 입력합니다:
 *    A1: 신청일시 | B1: 성함 | C1: 연락처 | D1: 유입경로 | E1: 상담상태
 * 3. 상단 메뉴 [확장 프로그램] -> [Apps Script] 클릭
 * 4. 기존 내용을 지우고 아래 코드를 그대로 붙여넣기 (Ctrl + V)
 * 5. 오른쪽 상단 [배포] -> [새 배포] 클릭
 * 6. 유형 선택: [웹 앱]
 *    - 설명: 관심고객 접수
 *    - 다음 사용자 권한으로 실행: '나(내 계정)'
 *    - 액세스 권한: '모든 사용자(Anyone)' (★중요)
 * 7. [배포] 버튼 클릭 후 나오는 '웹 앱 URL' (https://script.google.com/macros/s/.../exec)을 복사해서 전달해주시면 끝납니다!
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // 스프레드시트 새 행에 데이터 추가
    sheet.appendRow([
      data.date || new Date().toLocaleString('ko-KR'),
      data.name || '',
      data.phone || '',
      data.source || '웹사이트 접수',
      '신규접수' // 상담상태 기본값
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
