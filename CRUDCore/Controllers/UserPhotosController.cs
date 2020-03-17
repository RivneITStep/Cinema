﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CRUDCore.DAL.Entities;
using CRUDCore.Helpers;
using CRUDCore.ViewModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CRUDCore.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class UserPhotosController : ControllerBase
    {
        // GET: api/UserPhotos
        //static List<AnimalViewModel> data = new List<AnimalViewModel>
        //    {
        //        new AnimalViewModel
        //        {
        //            Id = 1,
        //            Name = "Верблюд",
        //            Image = "https://o-prirode.ru/wp-content/uploads/2017/10/verbljud-696x435.jpg",
        //        },
        //        new AnimalViewModel
        //        {
        //            Id = 2,
        //            Name = "Білка",
        //            Image = "http://www.zoolog.com.ua/ssavci/zv.gif",
        //        },
        //    };
        private readonly EFContext _context;
        private readonly IConfiguration _configuration;
        private readonly IHostingEnvironment _env;
        public UserPhotosController(EFContext context, IHostingEnvironment env,
            IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
            _env = env;
        }

        // GET api/animal/search
        [HttpGet("search")]
        public IActionResult Get()
        {
            Thread.Sleep(300);
            List<UserPhotosViewModel> model = _context.Users
                 .Select(a => new UserPhotosViewModel
                 {
                     Id = (int)a.Id,
                     Name = a.UserName,
                     Image = a.Image
                 }).ToList();

            return Ok(model);
        }

        // GET api/animal/add
        [HttpPost("add")]
        public IActionResult Post([FromBody]UserAddPhotosViewModel model)
        {
            //Random rand = new Random();
            _context.Users.Add(new DbUser
            {
                UserName = model.Name,
                Image = model.Image
            });
            _context.SaveChanges();
            return Ok();
        }

        [HttpPost("add-base64")]
        public IActionResult AddBase64([FromBody]UserAddPhotosViewModel model)
        {
            string imageName = Guid.NewGuid().ToString() + ".jpg";
            string base64 = model.Image;
            if (base64.Contains(","))
            {
                base64 = base64.Split(',')[1];
            }
            var bmp = base64.FromBase64StringToImage();
            string fileDestDir = _env.ContentRootPath;
            //string a = _configuration.GetValue<string>("ImagesPath");
            fileDestDir = Path.Combine(fileDestDir, "Uploaded");

            string fileSave = Path.Combine(fileDestDir, imageName);
            bmp.Save(fileSave);

            //_context.Animals.Add(new DbAnimal
            //{
            //    Name = model.Name,
            //    Image = model.Image
            //});
            //_context.SaveChanges();
            return Ok();
        }

    }
}
