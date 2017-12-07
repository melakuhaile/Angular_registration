export class User {
    constructor(
        public firstName: String = "",
        public lastName: String = "",
        public email: String = "",
        public password: String = "",
        public passwordcon: String = "",
        public street: String = "",
        public unit: String = "",
        public city: String = "",
        public state: String = "",
        public lucky: Boolean = null,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}
// This is the user class with all information we would need


