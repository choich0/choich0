const path = require('path');
const fs = require('fs');
const { ApiClientKldCon, ApiClientKldCm, ApiClientKldTech, ApiClientKldSafety } = require('./kld-api-client');
const { ApiClientDnewsStd, ApiClientDnewsEng, ApiClientDnewsTech, ApiClientDnewsMat, ApiClientDnewsSafety } = require('./dnews-api-client');
const { ApiClientMolitCity, ApiClientMolitLand, ApiClientMolitCon, ApiClientMolitGen } = require('./molit-api-client');
const { kldConUpdate, kldCmUpdate, kldTechUpdate, kldSafetyUpdate } = require('./kld-updater');
const { dnewsStdUpdate, dnewsEngUpdate, dnewsTechUpdate, dnewsMatUpdate, dnewsSafetyUpdate } = require('./dnews-updater')
const { molitCityUpdate, molitLandUpdate, molitConUpdate, molitGenUpdate } = require('./molit-updater')

async function main() {
  // 마지막으로 크롤링 했던 데이터를 파일로 저장해두기 위한 폴더 경로
  const outputPath = path.join(process.cwd(), 'output');
  // 폴더가 없다면 생성
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  const kldConApiClient = new ApiClientKldCon();
  const kldCmApiClient = new ApiClientKldCm();
  const kldTechApiClient = new ApiClientKldTech();
  const kldSafetyApiClient = new ApiClientKldSafety();
  const dnewsStdApiClient = new ApiClientDnewsStd();
  const dnewsEngApiClient = new ApiClientDnewsEng();
  const dnewsTechApiClient = new ApiClientDnewsTech();
  const dnewsMatApiClient = new ApiClientDnewsMat();
  const dnewsSafetyApiClient = new ApiClientDnewsSafety();
  const molitCityApiClient = new ApiClientMolitCity();
  const molitLandApiClient = new ApiClientMolitLand();
  const molitConApiClient = new ApiClientMolitCon();
  const molitGenApiClient = new ApiClientMolitGen();

  try {
    console.log('kldConUpdate started');
    await kldConUpdate(outputPath, kldConApiClient);
  } catch (e) {
    console.error('kldConUpdate failed', e);
  }

  try {
    console.log('kldCmUpdate started');
    await kldCmUpdate(outputPath, kldCmApiClient);
  } catch (e) {
    console.error('kldCmUpdate failed', e);
  }

  try {
    console.log('kldTechUpdate started');
    await kldTechUpdate(outputPath, kldTechApiClient);
  } catch (e) {
    console.error('kldTechUpdate failed', e);
  }

  try {
    console.log('kldSafetyUpdate started');
    await kldSafetyUpdate(outputPath, kldSafetyApiClient);
  } catch (e) {
    console.error('kldSafetyUpdate failed', e);
  }

  try {
    console.log('dnewsStdUpdate started');
    await dnewsStdUpdate(outputPath, dnewsStdApiClient);
  } catch (e) {
    console.error('dnewsStdUpdate failed', e);
  }

  try {
    console.log('dnewEngUpdate started');
    await dnewsEngUpdate(outputPath, dnewsEngApiClient);
  } catch (e) {
    console.error('dnewEngUpdate failed', e);
  }

  try {
    console.log('dnewsTechUpdate started');
    await dnewsTechUpdate(outputPath, dnewsTechApiClient);
  } catch (e) {
    console.error('dnewsTechUpdate failed', e);
  }

  try {
    console.log('dnewsMatUpdate started');
    await dnewsMatUpdate(outputPath, dnewsMatApiClient);
  } catch (e) {
    console.error('dnewsMatUpdate failed', e);
  }

  try {
    console.log('dnewsSafetyUpdate started');
    await dnewsSafetyUpdate(outputPath, dnewsSafetyApiClient);
  } catch (e) {
    console.error('dnewsSafetyUpdate failed', e);
  }
  
  try {
    console.log('molitCityUpdate started');
    await molitCityUpdate(outputPath, molitCityApiClient);
  } catch (e) {
    console.error('molitCityUpdate failed', e);
  }

  try {
    console.log('molitLandUpdate started');
    await molitLandUpdate(outputPath, molitLandApiClient);
  } catch (e) {
    console.error('molitLandUpdate failed', e);
  }

  try {
    console.log('molitConUpdate started');
    await molitConUpdate(outputPath, molitConApiClient);
  } catch (e) {
    console.error('molitConUpdate failed', e);
  }

  try {
    console.log('molitGenUpdate started');
    await molitGenUpdate(outputPath, molitGenApiClient);
  } catch (e) {
    console.error('molitGenUpdate failed', e);
  }  
}

main();
