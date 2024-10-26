// Google Apps Script (GAS) を使用して、指定されたGoogleドライブフォルダ内のサブフォルダとファイルを処理するスクリプト

// 設定（必要に応じて変更してください）
const MAIN_FOLDER_ID = '1Ku_OmWd_vf1O7IPFXqeztxM36JLqVR4X'; // メインフォルダのID
const PROCESSED_FOLDER_ID = '1a_Yyj8Sd4wHn_gZl2uAG0g_i8IysJDNu'; // 処理済みフォルダのID
const EXCLUDE_FOLDER_NAME = '処理済み'; // 除外するフォルダ名
const CSV_NUMBER_CELL = 'B1'; // 8桁の数字を入力するセル
const CSV_SUBNUMBER_CELL = 'B2'; // 3桁の数字を入力するセル
const PDF_LINK_CELL = 'B3'; // PDFリンクを入力するセル
const CSV_DATA_START_CELL = 'A6'; // CSVデータの貼り付け開始セル
const TEMPLATE_SHEET_NAME = 'ひな形'; // テンプレートシート名

// メインフォルダ内のサブフォルダを処理する関数
function processMainFolder() {
  const mainFolder = DriveApp.getFolderById(MAIN_FOLDER_ID);
  const processedFolder = DriveApp.getFolderById(PROCESSED_FOLDER_ID);
  const subFolders = mainFolder.getFolders();
  
  while (subFolders.hasNext()) {
    const subFolder = subFolders.next();
    if (subFolder.getName() !== EXCLUDE_FOLDER_NAME) {
      processSubFolder(subFolder, processedFolder);
    }
  }
}

// 個々のサブフォルダを処理する関数
function processSubFolder(subFolder, processedFolder) {
  const csvFiles = subFolder.getFilesByType(MimeType.CSV);
  const pdfFiles = subFolder.getFilesByType(MimeType.PDF);
  
  const pdfFile = pdfFiles.hasNext() ? pdfFiles.next() : null;
  
  while (csvFiles.hasNext()) {
    const csvFile = csvFiles.next();
    processCSVFile(csvFile, pdfFile, subFolder);
  }
  
  subFolder.moveTo(processedFolder);
}

// 個々のCSVファイルを処理する関数
function processCSVFile(csvFile, pdfFile, subFolder) {
  const fileName = csvFile.getName();
  const [mainNumber, subNumber] = fileName.split('-');
  
  // テンプレートシートをコピーして新しいスプレッドシートを作成
  const templateSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const templateSheet = templateSpreadsheet.getSheetByName(TEMPLATE_SHEET_NAME);
  const newSpreadsheet = SpreadsheetApp.create(`${fileName}_Lab確認リスト`);
  const newSheet = newSpreadsheet.getActiveSheet();
  
  // ひな形シートをコピーし、そこへ書き込む
  const copiedSheet = templateSheet.copyTo(newSpreadsheet);
  copiedSheet.setName(TEMPLATE_SHEET_NAME);
  
  // 8桁の数字をB1セルに入力
  copiedSheet.getRange(CSV_NUMBER_CELL).setValue(mainNumber);
  
  // 3桁の数字をB2セルに入力（拡張子を除去）
  copiedSheet.getRange(CSV_SUBNUMBER_CELL).setValue(subNumber.replace('.csv', ''));
  
  // PDFファイルが存在する場合、そのリンクをB3セルに入力
  if (pdfFile) {
    copiedSheet.getRange(PDF_LINK_CELL).setValue(pdfFile.getUrl());
  }
  
  // CSVファイルの内容を読み取り、A6セル以降に貼り付け
  const csvData = Utilities.parseCsv(csvFile.getBlob().getDataAsString());
  const targetRange = copiedSheet.getRange(CSV_DATA_START_CELL).offset(0, 0, csvData.length, csvData[0].length);
  targetRange.setValues(csvData);
  
  // 元のシートを削除
  newSpreadsheet.deleteSheet(newSheet);
  
  // 新しいスプレッドシートをサブフォルダに移動
  const newFile = DriveApp.getFileById(newSpreadsheet.getId());
  newFile.moveTo(subFolder);
}



// CSVファイルの内容を読み取り、A6セル以降に貼り付け
// const csvData = Utilities.parseCsv(csvFile.getBlob().getDataAsString()); 
/* 
  Utilities.parseCsv: 
  - このメソッドはCSV形式の文字列を2次元配列に変換します。
  - csvFile.getBlob().getDataAsString()でCSVファイルをBlobとして取得し、文字列データとして読み込む。
  - その後、parseCsvメソッドでCSVをパースし、行と列ごとのデータが入った配列に変換します。
  - 例として、CSVファイルの内容が "A,B,C\n1,2,3" の場合、このメソッドは以下の配列を返します：
    [
      ['A', 'B', 'C'],
      ['1', '2', '3']
    ]
*/

// const targetRange = copiedSheet.getRange(CSV_DATA_START_CELL).offset(0, 0, csvData.length, csvData[0].length);
/* 
  copiedSheet.getRange(CSV_DATA_START_CELL):
  - "A6" のようなセル範囲を表す文字列を使って、スプレッドシート上のセル範囲を指定します。
  - CSVデータを貼り付ける開始セルを指定しています。この場合、"A6"セルが始点です。
  
  offset(0, 0, csvData.length, csvData[0].length):
  - getRangeで取得した範囲から、さらにオフセットを適用して範囲を調整します。
  - 第一引数と第二引数は、それぞれ行と列の移動量を示します（今回は0,0なので移動なし）。
  - 第三引数と第四引数で、貼り付けるデータの行数(csvData.length)と列数(csvData[0].length)を指定します。
  - つまり、この部分は「データのサイズに合わせて範囲を指定する」役割を果たしています。
*/

// targetRange.setValues(csvData);
/* 
  setValues:
  - このメソッドは、指定されたセル範囲に配列形式のデータを一括で書き込むために使用されます。
  - 先ほど生成したcsvData（2次元配列）をA6セル以降のセル範囲に入力しています。
*/


/*
写経課題
それぞれの難易度に合わせた課題を提供します。コメントも丁寧に付けています。
*/

/*
1. 優しい (基礎レベル)
この課題では、CSVファイルの内容を単純に取得し、A1セルに貼り付けるだけです。
*/
function easyTask() {
    const csvFile = DriveApp.getFileById('CSV_FILE_ID'); // CSVファイルのIDを指定
    const csvData = Utilities.parseCsv(csvFile.getBlob().getDataAsString()); 
    /* CSVファイルの内容を取得し、2次元配列に変換 */
  
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData); 
    /* A1セルにデータを貼り付ける */
  }
  
  /*
  2. 普通 (中級レベル)
  少し複雑な課題として、A6セル以降にデータを貼り付ける処理に加え、ファイル名から取得した情報をセルに入力する処理を追加します。
  */
  function normalTask() {
    const csvFile = DriveApp.getFileById('CSV_FILE_ID');
    const fileName = csvFile.getName();
    const [mainNumber, subNumber] = fileName.split('-'); // ファイル名から8桁と3桁の番号を取得
  
    const csvData = Utilities.parseCsv(csvFile.getBlob().getDataAsString()); 
  
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.getRange('B1').setValue(mainNumber); // 8桁の番号をB1に入力
    sheet.getRange('B2').setValue(subNumber.replace('.csv', '')); // 3桁の番号をB2に入力
    sheet.getRange('A6').offset(0, 0, csvData.length, csvData[0].length).setValues(csvData); 
    /* A6セルにCSVデータを貼り付け */
  }
  
  
  /*
  3. 難しい (上級レベル)
  さらに高度な課題として、複数のCSVファイルをループで処理し、それぞれに対して新しいスプレッドシートを作成し、データを書き込む内容です。
  */
  function advancedTask() {
    const folder = DriveApp.getFolderById('FOLDER_ID');
    const csvFiles = folder.getFilesByType(MimeType.CSV);
  
    while (csvFiles.hasNext()) {
      const csvFile = csvFiles.next();
      const fileName = csvFile.getName();
      const [mainNumber, subNumber] = fileName.split('-');
  
      const csvData = Utilities.parseCsv(csvFile.getBlob().getDataAsString());
  
      const newSpreadsheet = SpreadsheetApp.create(`${fileName}_Lab確認リスト`); // 新しいスプレッドシート作成
      const sheet = newSpreadsheet.getActiveSheet();
      
      sheet.getRange('B1').setValue(mainNumber); // 8桁の番号をB1に入力
      sheet.getRange('B2').setValue(subNumber.replace('.csv', '')); // 3桁の番号をB2に入力
      sheet.getRange('A6').offset(0, 0, csvData.length, csvData[0].length).setValues(csvData); 
      /* CSVデータをA6セル以降に貼り付け */
    }
  }
  
  
  /*
  1. 優しい（基礎レベル）
  ここでは、A3からE列のデータを取得し、スプレッドシートのA6から貼り付ける処理を行います。
  */
  function easyTask2() {
    const csvFile = DriveApp.getFileById('CSV_FILE_ID'); // CSVファイルのIDを指定
    const csvData = Utilities.parseCsv(csvFile.getBlob().getDataAsString()); 
    /* CSVファイルの内容を取得し、2次元配列に変換 */
  
    const slicedData = csvData.slice(2).map(row => row.slice(0, 5)); 
    /* A3からE列までのデータを取得 */
  
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.getRange(6, 1, slicedData.length, slicedData[0].length).setValues(slicedData); 
    /* A6セルからデータを貼り付ける */
  }
  
  
  
  /*
  2. 普通（中級レベル）
  ここでは、A3からE列だけでなく、D列が特定の値である行のみを抽出してスプレッドシートに貼り付けます。
  */
  function normalTask2() {
    const csvFile = DriveApp.getFileById('CSV_FILE_ID');
    const csvData = Utilities.parseCsv(csvFile.getBlob().getDataAsString());
  
    // A3からE列までのデータで、D列が特定の値である行を抽出
    const filteredData = csvData.slice(2).filter(row => row[3] === '特定の値').map(row => row.slice(0, 5));
  
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.getRange(6, 1, filteredData.length, filteredData[0].length).setValues(filteredData);
    /* A6セルにフィルタリングされたデータを貼り付け */
  }
  
  
  
  /*
  3. 難しい（上級レベル）
  複数の範囲を指定して、例えばA3からE列、F列からH列など異なる範囲を取得してスプレッドシートに貼り付ける課題です。
  */
  function advancedTask2() {
    const csvFile = DriveApp.getFileById('CSV_FILE_ID');
    const csvData = Utilities.parseCsv(csvFile.getBlob().getDataAsString());
  
    // A3からE列までと、F列からH列までを抽出
    const slicedDataPart1 = csvData.slice(2).map(row => row.slice(0, 5)); // A3～E列
    const slicedDataPart2 = csvData.slice(2).map(row => row.slice(5, 8)); // F～H列
  
    const combinedData = slicedDataPart1.map((row, index) => row.concat(slicedDataPart2[index]));
  
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.getRange(6, 1, combinedData.length, combinedData[0].length).setValues(combinedData);
    /* A6セルに異なる範囲を結合したデータを貼り付け */
  }
  
  
  