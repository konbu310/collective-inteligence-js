const critics = {
  "Lisa Rose": {
    "Lady in the Water": 2.5,
    "Snakes on a Plane": 3.5,
    "Just Mu Luck": 3.0,
    "Superman Returns": 3.5,
    "You, Me adn Dupree": 2.5,
    "The Night Listener": 3.0,
  },
  "Gene Seymour": {
    "Lady in the Water": 3.0,
    "Snakes on a Plane": 3.5,
    "Just Mu Luck": 1.5,
    "Superman Returns": 5.0,
    "You, Me adn Dupree": 3.5,
    "The Night Listener": 3.0,
  },
  "Michael Phillips": {
    "Lady in the Water": 2.5,
    "Snakes on a Plane": 3.0,
    "Superman Returns": 3.5,
    "The Night Listener": 4.0,
  },
  "Claudia Puig": {
    "Snaked on a Plane": 3.5,
    "Just Mu Luck": 3.0,
    "The Night Listener": 4.5,
    "Superman Returns": 4.0,
    "You, Me and Dupree": 2.5,
  },
  "Mick LaSalle": {
    "Lady in the Water": 3.0,
    "Snakes on a Plane": 4.0,
    "Just My Luck": 2.0,
    "Superman Returns": 3.0,
    "The Night Listener": 3.0,
    "You, Me and Dupree": 2.0,
  },
  "Jack Matthews": {
    "Lady in the Water": 3.0,
    "Snakes on a Plane": 4.0,
    "The Night Listener": 3.0,
    "Superman Returns": 5.0,
    "You, Me and Dupree": 3.5,
  },
  Toby: {
    "Snaked on a Plane": 4.5,
    "Superman Returns": 4.0,
    "You, Me and Dupree": 1.0,
    "Superman Returns": 4.0,
  },
};

/** person1とperson2の距離を元にした類似性スコアを返す */
const simDistance = (prefs, person1, person2) => {
  // 2人ともが評価しているアイテムの配列を得る
  const si = Object.keys(prefs[person1]).flatMap((item, index) =>
    prefs[person2].hasOwnProperty(item) ? [item] : []
  );

  // 両者ともに評価しているものが一つもなければ0を返す
  if (si.length === 0) return 0;

  // すべての差の平方を足し合わせる
  const sumOfSquares = Object.keys(prefs[person1])
    .flatMap((item, index) =>
      si.includes(item)
        ? [Math.pow(prefs[person1][item] - prefs[person2][item], 2)]
        : []
    )
    .reduce((acc, cur) => acc + cur, 0);

  // 合計値の平方根を算出して逆数にして返す
  return 1 / (1 + Math.sqrt(sumOfSquares));
};

module.exports = {
  critics,
  simDistance,
};
