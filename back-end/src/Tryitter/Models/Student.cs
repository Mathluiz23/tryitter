using System.ComponentModel.DataAnnotations;

public class Student 
{
    [Key]
    public int StudentId { get; set; }
    public string StudentName { get; set; }
    public string Email { get; set; }
    public Modules CurrentModule { get; set; }
    public string Status { get; set; }
    public string Password { get; set; }
    public virtual ICollection<Post>? Posts { get; set; }

}