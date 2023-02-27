const path = require('path');
const fs = require('fs');
const { ApiClientKldCon, ApiClientKldCm, ApiClientKldTech, ApiClientKldSafety } = require('./kld-api-client');
const { ApiClientDnewsStd, ApiClientDnewsEng, ApiClientDnewsTech, ApiClientDnewsMat, ApiClientDnewsSafety } = require('./dnews-api-client');
const { ApiClientMolitCity, ApiClientMolitLand, ApiClientMolitCon, ApiClientMolitGen } = require('./molit-api-client');
const { ApiClientKffaAnn, ApiClientKffaNot, ApiClientKffaRaw } = require('./kffa-api-client');
const { ApiClientKeeaAnn, ApiClientKeeaRaw } = require('./keea-api-client');
const { ApiClientKacemAnn } = require('./kacem-api-client');
const { ApiClientInsaEdu, ApiClientInsaHr } = require('./insa-api-client');
const { ApiClientSaramPlan, ApiClientSaramEval, ApiClientSaramGroup, ApiClientSaramPol, ApiClientSaramTrend } = require('./saram-api-client');
const { ApiClientAbouthrMg, ApiClientAbouthrPr, ApiClientAbouthrRc } = require('./abouthr-api-client');
const { ApiClientGgnewsExt, ApiClientGgnewsFac, ApiClientGgnewsSem } = require('./ggnews-api-client');
const { ApiClientKoitaNot } = require('./koita-api-client');
const { ApiClientCadTv, ApiClientCadSpe, ApiClientCadLec, ApiClientCadNews } = require('./cad-api-client');
const { ApiClientSRocm, ApiClientWRocm, ApiClientDRocm, ApiClientBRocm, ApiClientIRocm } = require('./rocm-api-client');
const { ApiClientKcnetTech, ApiClientKcnetNot, ApiClientKcnetNews } = require('./kcnet-api-client');
const { ApiClientKoshaNews, ApiClientKoshaCon, ApiClientKoshaGov } = require('./kosha-api-client');
const { kldConUpdate, kldCmUpdate, kldTechUpdate, kldSafetyUpdate } = require('./kld-updater');
const { dnewsStdUpdate, dnewsEngUpdate, dnewsTechUpdate, dnewsMatUpdate, dnewsSafetyUpdate } = require('./dnews-updater')
const { molitCityUpdate, molitLandUpdate, molitConUpdate, molitGenUpdate } = require('./molit-updater')
const { kffaAnnUpdate, kffaNotUpdate, kffaRawUpdate } = require('./kffa-updater')
const { keeaAnnUpdate, keeaRawUpdate } = require('./keea-updater')
const { kacemAnnUpdate } = require('./kacem-updater')
const { insaEduUpdate, insaHrUpdate } = require('./insa-updater')
const { saramPlanUpdate, saramEvalUpdate, saramGroupUpdate, saramPolUpdate, saramTrendUpdate } = require('./saram-updater')
const { abouthrMgUpdate, abouthrPrUpdate, abouthrRcUpdate } = require('./abouthr-updater')
const { ggnewsExtUpdate, ggnewsFacUpdate, ggnewsSemUpdate } = require('./ggnews-updater')
const { koitaNotUpdate } = require('./koita-updater')
const { cadTvUpdate, cadSpeUpdate, cadLecUpdate, cadNewsUpdate } = require('./cad-updater')
const { sRocmUpdate, wRocmUpdate, dRocmUpdate, bRocmUpdate, iRocmUpdate } = require('./rocm-updater')
const { kcnetTechUpdate, kcnetNotUpdate, kcnetNewsUpdate } = require('./kcnet-updater')
const { koshaNewsUpdate, koshaConUpdate, koshaGovUpdate } = require('./kosha-updater')

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
  const kffaAnnApiClient = new ApiClientKffaAnn();
  const kffaNotApiClient = new ApiClientKffaNot();
  const kffaRawApiClient = new ApiClientKffaRaw();
  const keeaAnnApiClient = new ApiClientKeeaAnn();
  const keeaRawApiClient = new ApiClientKeeaRaw();
  const kacemAnnApiClient = new ApiClientKacemAnn();
  const insaEduApiClient = new ApiClientInsaEdu();
  const insaHrApiClient = new ApiClientInsaHr();
  const saramPlanApiClient = new ApiClientSaramPlan();
  const saramEvalApiClient = new ApiClientSaramEval();
  const saramGroupApiClient = new ApiClientSaramGroup();
  const saramPolApiClient = new ApiClientSaramPol();
  const saramTrendApiClient = new ApiClientSaramTrend();
  const abouthrMgApiClient = new ApiClientAbouthrMg();
  const abouthrPrApiClient = new ApiClientAbouthrPr();
  const abouthrPcApiClient = new ApiClientAbouthrRc();
  const ggnewsExtApiClient = new ApiClientGgnewsExt();
  const ggnewsFacApiClient = new ApiClientGgnewsFac();
  const ggnewsSemApiClient = new ApiClientGgnewsSem();
  const koitaNotApiClient = new ApiClientKoitaNot();
  const cadTvApiClient = new ApiClientCadTv();
  const cadSpeApiClient = new ApiClientCadSpe();
  const cadLecApiClient = new ApiClientCadLec();
  const cadNewsApiClient = new ApiClientCadNews();
  const sRocmApiClient = new ApiClientSRocm();
  const wRocmApiClient = new ApiClientWRocm();
  const dRocmApiClient = new ApiClientDRocm();
  const bRocmApiClient = new ApiClientBRocm();
  const iRocmApiClient = new ApiClientIRocm();
  const kcnetTechApiClient = new ApiClientKcnetTech();
  const kcnetNotApiClient = new ApiClientKcnetNot();
  const kcnetNewsApiClient = new ApiClientKcnetNews();
  const koshaNewsApiClient = new ApiClientKoshaNews();
  const koshaConApiClient = new ApiClientKoshaCon();
  const koshaGovApiClient = new ApiClientKoshaGov();

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

  try {
    console.log('kffaAnnUpdate started');
    await kffaAnnUpdate(outputPath, kffaAnnApiClient);
  } catch (e) {
    console.error('kffaAnnUpdate failed', e);
  }

  try {
    console.log('kffaNotUpdate started');
    await kffaNotUpdate(outputPath, kffaNotApiClient);
  } catch (e) {
    console.error('kffaNotUpdate failed', e);
  }

  try {
    console.log('kffaRawUpdate started');
    await kffaRawUpdate(outputPath, kffaRawApiClient);
  } catch (e) {
    console.error('kffaRawUpdate failed', e);
  }

  try {
    console.log('keeaAnnUpdate started');
    await keeaAnnUpdate(outputPath, keeaAnnApiClient);
  } catch (e) {
    console.error('keeaAnnUpdate failed', e);
  }

  try {
    console.log('keeaRawUpdate started');
    await keeaRawUpdate(outputPath, keeaRawApiClient);
  } catch (e) {
    console.error('keeaRawUpdate failed', e);
  }

  try {
    console.log('kacemAnnUpdate started');
    await kacemAnnUpdate(outputPath, kacemAnnApiClient);
  } catch (e) {
    console.error('kacemAnnUpdate failed', e);
  }

  try {
    console.log('insaEduUpdate started');
    await insaEduUpdate(outputPath, insaEduApiClient);
  } catch (e) {
    console.error('insaEduUpdate failed', e);
  }

  try {
    console.log('insaHrUpdate started');
    await insaHrUpdate(outputPath, insaHrApiClient);
  } catch (e) {
    console.error('insaHrUpdate failed', e);
  }

  try {
    console.log('saramPlanUpdate started');
    await saramPlanUpdate(outputPath, saramPlanApiClient);
  } catch (e) {
    console.error('saramPlanUpdate failed', e);
  }

  try {
    console.log('saramEvalUpdate started');
    await saramEvalUpdate(outputPath, saramEvalApiClient);
  } catch (e) {
    console.error('saramEvalUpdate failed', e);
  }

  try {
    console.log('saramGroupUpdate started');
    await saramGroupUpdate(outputPath, saramGroupApiClient);
  } catch (e) {
    console.error('saramGroupUpdate failed', e);
  }

  try {
    console.log('saramPolUpdate started');
    await saramPolUpdate(outputPath, saramPolApiClient);
  } catch (e) {
    console.error('saramPolUpdate failed', e);
  }

  try {
    console.log('saramTrendUpdate started');
    await saramTrendUpdate(outputPath, saramTrendApiClient);
  } catch (e) {
    console.error('saramTrendUpdate failed', e);
  }

  try {
    console.log('abouthrMgUpdate started');
    await abouthrMgUpdate(outputPath, abouthrMgApiClient);
  } catch (e) {
    console.error('abouthrMgUpdate failed', e);
  }

  try {
    console.log('abouthrPrUpdate started');
    await abouthrPrUpdate(outputPath, abouthrPrApiClient);
  } catch (e) {
    console.error('abouthrPrUpdate failed', e);
  }

  try {
    console.log('abouthrRcUpdate started');
    await abouthrRcUpdate(outputPath, abouthrPcApiClient);
  } catch (e) {
    console.error('abouthrRcUpdate failed', e);
  }

  try {
    console.log('ggnewsExtUpdate started');
    await ggnewsExtUpdate(outputPath, ggnewsExtApiClient);
  } catch (e) {
    console.error('ggnewsExtUpdate failed', e);
  }

  try {
    console.log('ggnewsFacUpdate started');
    await ggnewsFacUpdate(outputPath, ggnewsFacApiClient);
  } catch (e) {
    console.error('ggnewsFacUpdate failed', e);
  }

  try {
    console.log('ggnewsSemUpdate started');
    await ggnewsSemUpdate(outputPath, ggnewsSemApiClient);
  } catch (e) {
    console.error('ggnewsSemUpdate failed', e);
  }

  try {
    console.log('koitaNotUpdate started');
    await koitaNotUpdate(outputPath, koitaNotApiClient);
  } catch (e) {
    console.error('koitaNotUpdate failed', e);
  }

  try {
    console.log('cadTvUpdate started');
    await cadTvUpdate(outputPath, cadTvApiClient);
  } catch (e) {
    console.error('cadTvUpdate failed', e);
  }

  try {
    console.log('cadSpeUpdate started');
    await cadSpeUpdate(outputPath, cadSpeApiClient);
  } catch (e) {
    console.error('cadSpeUpdate failed', e);
  }

  try {
    console.log('cadLecUpdate started');
    await cadLecUpdate(outputPath, cadLecApiClient);
  } catch (e) {
    console.error('cadLecUpdate failed', e);
  }

  try {
    console.log('cadNewsUpdate started');
    await cadNewsUpdate(outputPath, cadNewsApiClient);
  } catch (e) {
    console.error('cadNewsUpdate failed', e);
  }

  try {
    console.log('sRocmUpdate started');
    await sRocmUpdate(outputPath, sRocmApiClient);
  } catch (e) {
    console.error('sRocmUpdate failed', e);
  }

  try {
    console.log('wRocmUpdate started');
    await wRocmUpdate(outputPath, wRocmApiClient);
  } catch (e) {
    console.error('wRocmUpdate failed', e);
  }

  try {
    console.log('dRocmUpdate started');
    await dRocmUpdate(outputPath, dRocmApiClient);
  } catch (e) {
    console.error('dRocmUpdate failed', e);
  }

  try {
    console.log('bRocmUpdate started');
    await bRocmUpdate(outputPath, bRocmApiClient);
  } catch (e) {
    console.error('bRocmUpdate failed', e);
  }

  try {
    console.log('iRocmUpdate started');
    await iRocmUpdate(outputPath, iRocmApiClient);
  } catch (e) {
    console.error('iRocmUpdate failed', e);
  }

  try {
    console.log('kcnetTechUpdate started');
    await kcnetTechUpdate(outputPath, kcnetTechApiClient);
  } catch (e) {
    console.error('kcnetTechUpdate failed', e);
  }

  try {
    console.log('kcnetNotUpdate started');
    await kcnetNotUpdate(outputPath, kcnetNotApiClient);
  } catch (e) {
    console.error('kcnetNotUpdate failed', e);
  }

  try {
    console.log('kcnetNewsUpdate started');
    await kcnetNewsUpdate(outputPath, kcnetNewsApiClient);
  } catch (e) {
    console.error('kcnetNewsUpdate failed', e);
  }

  try {
    console.log('koshaNewsUpdate started');
    await koshaNewsUpdate(outputPath, koshaNewsApiClient);
  } catch (e) {
    console.error('koshaNewsUpdate failed', e);
  }

  try {
    console.log('koshaConUpdate started');
    await koshaConUpdate(outputPath, koshaConApiClient);
  } catch (e) {
    console.error('koshaConUpdate failed', e);
  }

  try {
    console.log('koshaGovUpdate started');
    await koshaGovUpdate(outputPath, koshaGovApiClient);
  } catch (e) {
    console.error('koshaGovUpdate failed', e);
  }
}

main();
