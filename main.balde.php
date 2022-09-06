<div class="form-group" style="padding-bottom:15px;">
    <div style="width:40%;float:left">
        <div class="drop-down-country-list"><span>Select Country</span> <a style="float:right">&nbsp;&nbsp;&darr;</a></div>
        @php //$countries = \App\Country::get(); @endphp
        <div class="country-dropdown">
        <input class="form-control search-country" />
        <ul>
        /* Dynamic array with country code and country name*/
        @foreach($countries as $c)
        <li class="country-phone-code" data-name="{{$c->name}}" data-code="{{$c->phonecode}}"><!-- img style="width:20px;" src="/flags-small/{{strtolower($c->iso2)}}.png" --> {{$c->name}} ({{$c->phonecode}})</li>
        @endforeach
        </ul>
        </div>
    </div>
    <div style="width:60%;float:left">
         <input type="hidden" class="form-control" value="{{old('phone_code')}}" id="phone_code" name="phone_code" placeholder="Enter your phone number" required=""> 
         <input type="number" class="form-control" value="{{old('phone')}}" id="phone" name="phone" placeholder="Enter your phone number" required=""> 
    </div>

</div>
