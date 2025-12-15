export class AdminUser {
  constructor({
    id,
    username,
    email,
    password_hash,
    role = "admin",
    created_at = new Date(),
    updated_at = new Date(),
  }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password_hash = password_hash;
    this.role = role;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
