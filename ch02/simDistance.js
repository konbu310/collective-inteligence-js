/** person1とperson2の距離を元にした類似性スコアを返す */
const simDistance = (prefs, p1, p2) => {
  // 2人ともが評価しているアイテムの配列を得る
  const si = Object.keys(prefs[p1]).flatMap((item, index) =>
    prefs[p2].hasOwnProperty(item) ? [item] : []
  );

  // 両者ともに評価しているものが一つもなければ0を返す
  if (si.length === 0) return 0;

  // すべての差の平方を足し合わせる
  const sumOfSquares = Object.keys(prefs[p1])
    .flatMap((item, index) =>
      si.includes(item) ? [Math.pow(prefs[p1][item] - prefs[p2][item], 2)] : []
    )
    .reduce((acc, cur) => acc + cur, 0);

  // 合計値の平方根を算出して逆数にして返す
  return 1 / (1 + Math.sqrt(sumOfSquares));
};

module.exports = simDistance;
