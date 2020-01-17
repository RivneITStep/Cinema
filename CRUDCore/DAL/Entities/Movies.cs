using System;
using System.Collections.Generic;

namespace CRUDCore
{
    public partial class Movies
    {
        public int Id { get; set; }
        public string Link { get; set; }
        public string LinkToTreiler { get; set; }
        public string Photo { get; set; }
        public string TheName { get; set; }
        public long? Counter { get; set; }
    }
}
