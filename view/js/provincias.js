/*
 * This file is part of FacturaScripts
 * Copyright (C) 2015-2017  Carlos Garcia Gomez  neorazorx@gmail.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

 var provincia_list = [
    {value: "Ahuachapán"},
    {value: "Santa Ana"},
    {value: "Sonsonate"},
    {value: "Usulután"},
    {value: "San Miguel"},
    {value: "Morazán"},
    {value: "La Unión"},
    {value: "La Libertad"},
    {value: "Chalatenango"},
    {value: "Cuscatlán"},
    {value: "San Salvador"},
    {value: "La Paz"},
    {value: "Cabañas"},
    {value: "San Vicente"},
];

$(document).ready(function() {
   $("#ac_provincia, #ac_provincia2").autocomplete({
      lookup: provincia_list,
   });
});
