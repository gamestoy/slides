      join([1,2,3,4,5], '_'); // 1_2_3_4_5
      join([1,2,3,4,5]);      // 1,2,3,4,5














const join = ([ head, ...tail ], separator = ',') => {
  return tail.length
    ? head + separator + join(tail, separator)
    : head;
};

join([1,2,3,4,5], '|'); // 1|2|3|4|5
