using System;
using System.Collections.Generic;
using System.Text;

namespace Streams.Common.Enums
{
    public enum StatusOption
    {
        Not_Started, 
        In_Progress, 
        On_Hold,
        Awaiting_QA,
        Failed_QA,
        Complete,
        Cancelled 
    }
}
