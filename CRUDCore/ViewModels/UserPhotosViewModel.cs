using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDCore.ViewModels
{
    public class UserPhotosViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
    }
    public class UserAddPhotosViewModel
    {
        public string Name { get; set; }
        public string Image { get; set; }

    }
}
