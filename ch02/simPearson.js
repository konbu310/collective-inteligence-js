/** p1とp2のピアソン相関係数を返す */
const simPearson = (prefs, p1, p2) => {
  // 両者がお互いに評価しているアイテムのリストを取得
  const si = Object.keys(prefs[p1]).flatMap((item, index) =>
    prefs[p2].hasOwnProperty(item) ? [item] : []
  );

  // ともに評価しているアイテムがなければ0を返す
  if (si.length === 0) return 0;

  // すべての嗜好を合計する
  const sum1 = si
    .flatMap((item, index) => [prefs[p1][item]])
    .reduce((acc, cur) => acc + cur, 0);
  const sum2 = si
    .flatMap((item, index) => [prefs[p2][item]])
    .reduce((acc, cur) => acc + cur, 0);

  // 平方を合計する
  const sum1Sq = si
    .flatMap((item, index) => [Math.pow(prefs[p1][item], 2)])
    .reduce((acc, cur) => acc + cur, 0);
  const sum2Sq = si
    .flatMap((item, index) => [Math.pow(prefs[p2][item], 2)])
    .reduce((acc, cur) => acc + cur, 0);

  // 積を合計する
  const pSum = si
    .flatMap((item, index) => [prefs[p1][item] * prefs[p2][item]])
    .reduce((acc, cur) => acc + cur, 0);

  // ピアソンによるスコアを計算する
  const num = pSum - (sum1 * sum2) / si.length;
  const den = Math.sqrt(
    (sum1Sq - Math.pow(sum1, 2) / si.length) *
      (sum2Sq - Math.pow(sum2, 2) / si.length)
  );
  if (den === 0) return 0;

  return num / den;
};

module.exports = simPearson;
