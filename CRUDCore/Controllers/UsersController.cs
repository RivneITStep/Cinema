using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CRUDCore.DAL.Entities;
using CRUDCore.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace CRUDCore.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    //[ApiController]
    public class UsersController : ControllerBase
    {
        private readonly EFContext _context;
        public UsersController(EFContext context)
        {
            _context = context;
        }
        //public List<UserItemViewModel> GetUsers()
        //{
        //    //Thread.Sleep(5000);
        //    var model = new List<UserItemViewModel>
        //    {
        //        new UserItemViewModel
        //        {
        //            Id=1 , Email="jon@gg.ss",
        //            Roles = new List<RoleItemViewModel>
        //            {
        //                new RoleItemViewModel { Id=2, Name="Admin"}
        //            }
        //        },
        //    //    new UserItemViewModel
        //    //    {
        //    //        Id=2, Email="bombelyk@gg.ss",
        //    //        Roles = new List<RoleItemViewModel>
        //    //        {
        //    //            new RoleItemViewModel { Id=2, Name="Admin"},
        //    //            new RoleItemViewModel { Id=3, Name="Meson"}
        //    //        }
        //    //    }
        //};

        //    return model;
        //}
        [HttpGet("[action]")]
        public async  Task<IActionResult> GetUsers()
        {
            List<UserItemViewModel> list = new List<UserItemViewModel>();

            using (MySqlConnection conn = new MySqlConnection("Server = 91.238.103.120; Port = 5432; Database = mydb; User Id = myuser; Password = mypass;"))
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM AspNetUsers", conn);
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new UserItemViewModel()
                        {
                            Id = reader.GetInt32("user_id"),
                            Email = reader.GetString("email"),
                        });
                        }
                }
            }

            return new JsonResult(list);
        }
    }
}