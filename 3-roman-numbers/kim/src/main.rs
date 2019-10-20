
fn arabic_to_roman(nb: i16) -> String {
    let _vec = vec![
        (1000, "M"),
        (900,  "CM"),
        (500,  "D"),
        (400,  "CD"),
        (100,  "C"),
        (90,   "XC"),
        (50,   "L"),
        (40,   "XL"),
        (10,   "X"),
        (9,    "IX"),
        (5,    "V"),
        (4,    "IV"),
        (1,    "I")
    ];

    match nb {
        0 => return String::from(""),
        n if n > 0 => {
            let (a, b) = _vec.iter()
                .filter(|x| x.0 <= n)
                .nth(0)
                .unwrap();
            
            return format!("{}{}", b, arabic_to_roman(nb - a));
        },
        _ => return String::from("Cannot handle negatives"),
    }
}

fn main() {
    println!("{}", arabic_to_roman(666));
    println!("{}", arabic_to_roman(1444));
    println!("{}", arabic_to_roman(2009));
    println!("{}", arabic_to_roman(3499));
    println!("{}", arabic_to_roman(30));
}
