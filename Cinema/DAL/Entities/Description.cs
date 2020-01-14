using System;
using System.Collections.Generic;

namespace CRUDCore
{
    public partial class Description
    {
        public int Id { get; set; }
        public string Genre { get; set; }
        public string ReleaseDate { get; set; }
        public string Director { get; set; }
        public string Cast { get; set; }
    }
}
