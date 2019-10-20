(defn kangaroo [x1 v1 x2 v2]
  (def m (- v1 v2))
  (def p (- x1 x2))
  (def x (* m p))
  (if (>= x 0)
    "NO"
    (if (= (mod (- p) m) 0)
      "YES"
      "NO"))
)

(kangaroo 0 3 4 2)